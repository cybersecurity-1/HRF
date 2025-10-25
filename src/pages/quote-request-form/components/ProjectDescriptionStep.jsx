import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProjectDescriptionStep = ({ formData, updateFormData, errors }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file
    }));
    
    setUploadedFiles(prev => [...prev, ...newFiles]);
    updateFormData({ attachments: [...uploadedFiles, ...newFiles] });
  };

  const removeFile = (fileId) => {
    const updatedFiles = uploadedFiles.filter(file => file.id !== fileId);
    setUploadedFiles(updatedFiles);
    updateFormData({ attachments: updatedFiles });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
          Project Description
        </h2>
        <p className="text-base font-body text-muted-foreground">
          Provide additional details about your roofing project.
        </p>
      </div>

      <div>
        <label className="block text-sm font-body font-medium text-foreground mb-2">
          Project Description
          <span className="text-destructive ml-1">*</span>
        </label>
        <textarea
          className="w-full min-h-[120px] px-3 py-2 border border-border rounded-md bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-vertical"
          placeholder="Please describe your roofing project in detail. Include any specific requirements, challenges, or preferences you have..."
          value={formData.description || ''}
          onChange={(e) => handleInputChange('description', e.target.value)}
          rows={5}
        />
        {errors.description && (
          <p className="mt-1 text-sm text-destructive">{errors.description}</p>
        )}
        <p className="mt-1 text-xs text-muted-foreground">
          Minimum 50 characters required. Be as detailed as possible to help us provide an accurate quote.
        </p>
      </div>

      <div>
        <label className="block text-sm font-body font-medium text-foreground mb-2">
          Current Roofing Issues (if any)
        </label>
        <textarea
          className="w-full min-h-[80px] px-3 py-2 border border-border rounded-md bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-vertical"
          placeholder="Describe any existing problems with your current roof (leaks, damage, age, etc.)"
          value={formData.currentIssues || ''}
          onChange={(e) => handleInputChange('currentIssues', e.target.value)}
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-body font-medium text-foreground mb-2">
          Special Requirements or Preferences
        </label>
        <textarea
          className="w-full min-h-[80px] px-3 py-2 border border-border rounded-md bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-vertical"
          placeholder="Any specific materials, colors, or design preferences? Environmental considerations? Access limitations?"
          value={formData.specialRequirements || ''}
          onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-body font-medium text-foreground mb-4">
          Upload Photos or Documents
        </label>
        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center bg-muted/30">
          <Icon name="Upload" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
          <p className="text-base font-body text-foreground mb-2">
            Upload photos of your current roof or project blueprints
          </p>
          <p className="text-sm font-body text-muted-foreground mb-4">
            Supported formats: JPG, PNG, PDF (Max 10MB per file)
          </p>
          <input
            type="file"
            id="file-upload"
            className="hidden"
            multiple
            accept="image/*,.pdf"
            onChange={handleFileUpload}
          />
          <Button
            variant="outline"
            size="default"
            iconName="Upload"
            iconPosition="left"
            onClick={() => document.getElementById('file-upload').click()}
          >
            Choose Files
          </Button>
        </div>

        {uploadedFiles.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-body font-medium text-foreground">
              Uploaded Files ({uploadedFiles.length})
            </p>
            {uploadedFiles.map((file) => (
              <div key={file.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon 
                    name={file.type.startsWith('image/') ? 'Image' : 'FileText'} 
                    size={20} 
                    color="var(--color-muted-foreground)" 
                  />
                  <div>
                    <p className="text-sm font-body font-medium text-foreground">
                      {file.name}
                    </p>
                    <p className="text-xs font-body text-muted-foreground">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(file.id)}
                  className="flex items-center justify-center w-8 h-8 rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors duration-200"
                >
                  <Icon name="X" size={16} strokeWidth={2} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Input
        label="How did you hear about us?"
        type="text"
        placeholder="Google search, referral, social media, etc."
        description="This helps us understand how customers find our services"
        value={formData.referralSource || ''}
        onChange={(e) => handleInputChange('referralSource', e.target.value)}
        error={errors.referralSource}
      />
    </div>
  );
};

export default ProjectDescriptionStep;